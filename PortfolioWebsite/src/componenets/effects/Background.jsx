import React, { useRef, useEffect } from 'react';

const AsteroidsCanvas = () => {
  const canvasRef = useRef(null);
  const asteroidsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Helper classes and functions
    class Asteroid {
      constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.rotationAngle = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.vertices = generateVertices(7 + Math.floor(Math.random() * 5), radius);
      }

      draw(ctx) {
        ctx.strokeStyle = "#008080BF";
        ctx.fillStyle = "#00808040";
        ctx.beginPath();

        let rotated = this.getWorldCoordinates(this.vertices[0]);
        ctx.moveTo(rotated.x, rotated.y);

        this.maxX = rotated.x;
        this.maxY = rotated.y;
        this.minX = rotated.x;
        this.minY = rotated.y;

        for (let i = 1; i < this.vertices.length; i++) {
          rotated = this.getWorldCoordinates(this.vertices[i]);
          ctx.lineTo(rotated.x, rotated.y);
          this.maxX = Math.max(this.maxX, rotated.x);
          this.maxY = Math.max(this.maxY, rotated.y);
          this.minX = Math.min(this.minX, rotated.x);
          this.minY = Math.min(this.minY, rotated.y);
        }

        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      }

      update(canvas) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotationAngle += this.rotationSpeed;

        const margin = this.radius*2;
        if (this.x < -margin) this.x = canvas.width + margin;
        if (this.x > canvas.width + margin) this.x = -margin;
        if (this.y < -margin) this.y = canvas.height + margin;
        if (this.y > canvas.height + margin) this.y = -margin;
      }

      checkCollision(asteroids) {
        asteroids.forEach((other) => {
          if (this !== other) {
            this.checkBoxCollision(other);
          }
        });
      }

      checkBoxCollision(other) {
        if (
          this.minX < other.maxX &&
          this.maxX > other.minX &&
          this.minY < other.maxY &&
          this.maxY > other.minY
        ) {
          if (this.checkLineIntersection(other)) {
            this.handleCollision(other);
          }
        }
      }

      handleCollision(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const normalX = dx / distance;
        const normalY = dy / distance;

        const relativeSpeedX = this.speedX - other.speedX;
        const relativeSpeedY = this.speedY - other.speedY;

        const velocityAlongNormal =
          relativeSpeedX * normalX + relativeSpeedY * normalY;

        if (velocityAlongNormal < 0) {
          const impulse = (2 * velocityAlongNormal) / (this.radius + other.radius);

          this.speedX -= impulse * other.radius * normalX;
          this.speedY -= impulse * other.radius * normalY;
          other.speedX += impulse * this.radius * normalX;
          other.speedY += impulse * this.radius * normalY;
        }
      }

      checkLineIntersection(other) {
        for (let i = 0; i < this.vertices.length; i++) {
          for (let w = 0; w < other.vertices.length; w++) {
            const nextI = (i + 1) % this.vertices.length;
            const nextW = (w + 1) % other.vertices.length;

            const a1 = this.getWorldCoordinates(this.vertices[i]);
            const a2 = this.getWorldCoordinates(this.vertices[nextI]);
            const b1 = other.getWorldCoordinates(other.vertices[w]);
            const b2 = other.getWorldCoordinates(other.vertices[nextW]);

            const o1 = this.checkOrientation(a1, a2, b1);
            const o2 = this.checkOrientation(a1, a2, b2);
            const o3 = this.checkOrientation(b1, b2, a1);
            const o4 = this.checkOrientation(b1, b2, a2);

            if (o1 !== o2 && o3 !== o4) return true;
          }
        }
        return false;
      }

      checkOrientation(p, q, r) {
        const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
        if (Math.abs(val) < 1e-10) return 0;
        return val > 0 ? 1 : 2;
      }

      getWorldCoordinates(vertex) {
        return {
          x:
            vertex.x * Math.cos(this.rotationAngle) -
            vertex.y * Math.sin(this.rotationAngle) +
            this.x,
          y:
            vertex.x * Math.sin(this.rotationAngle) +
            vertex.y * Math.cos(this.rotationAngle) +
            this.y,
        };
      }
    }

    function generateVertices(numSides, radius) {
      const vertices = [];
      for (let i = 0; i < numSides; i++) {
        const angle = (i / numSides) * Math.PI * 2;
        const x = Math.cos(angle) * radius + (Math.random() - 0.5) * radius * 0.5;
        const y = Math.sin(angle) * radius + (Math.random() - 0.5) * radius * 0.5;
        vertices.push({ x, y });
      }
      return vertices;
    }

    function generateAsteroids(num, canvas) {
      const asteroids = [];
      const baseRadius = Math.min(canvas.width, canvas.height) / 15;

      for (let i = 0; i < num; i++) {
        const radius = baseRadius + Math.random() * (baseRadius * 0.5);
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;

        let overlap = true;
        while (overlap) {
          overlap = false;
          for (let w = 0; w < asteroids.length; w++) {
            const other = asteroids[w];
            const dx = x - other.x;
            const dy = y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < radius + other.radius) {
              overlap = true;
              x = Math.random() * canvas.width;
              y = Math.random() * canvas.height;
            }
          }
        }

        const speedX = (Math.random() - 0.5) * 2;
        const speedY = (Math.random() - 0.5) * 2;
        asteroids.push(new Asteroid(x, y, radius, speedX, speedY));
      }
      return asteroids;
    }

    function drawGrid(ctx, width, height, spacing = 25) {
      ctx.strokeStyle = "#ffffff0f";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let x = 0; x <= width; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    }

    // Now define resizeCanvas after all dependencies
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      asteroidsRef.current = generateAsteroids(15, canvas);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid(ctx, canvas.width, canvas.height);

      const asteroids = asteroidsRef.current;
      asteroids.forEach((asteroid) => {
        asteroid.update(canvas);
        asteroid.draw(ctx);
        asteroid.checkCollision(asteroids);
      });

      requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="asteroids" style={{ display: 'block', position:'fixed', zIndex:-1}} />;
};

export default AsteroidsCanvas;