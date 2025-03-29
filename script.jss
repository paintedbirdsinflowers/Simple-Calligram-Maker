function generateCalligram() {
    const input = document.getElementById('inputWord').value;
    const shape = document.getElementById('shapeSelect').value;
    const output = document.getElementById('calligram');
    output.innerHTML = ''; 

    if (input.length === 0) return;

    const letters = input.split('');
    const centerX = 150; 
    const centerY = 150;

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letter;

        let x, y;
        const t = index / (letters.length - 1 || 1); 
        switch (shape) {
            case 'wave':
                x = 20 + index * 20;
                y = centerY + Math.sin(index * 0.7) * 50;
                break;
            case 'diagonal':
                x = 20 + index * 20;
                y = 20 + index * 20;
                break;
            case 'circle':
                const circleAngle = (index / letters.length) * 2 * Math.PI;
                x = centerX + Math.cos(circleAngle) * 100;
                y = centerY + Math.sin(circleAngle) * 100;
                break;
            case 'spiral':
                const radius = 20 + index * 5;
                const spiralAngle = index * 0.4;
                x = centerX + Math.cos(spiralAngle) * radius;
                y = centerY + Math.sin(spiralAngle) * radius;
                break;
            case 'heart':
                const heartAngle = Math.PI * (t * 2 - 1);
                x = centerX + 80 * Math.pow(Math.sin(heartAngle), 3);
                y = centerY - (50 * Math.cos(heartAngle) - 20 * Math.cos(2 * heartAngle) - 10 * Math.cos(3 * heartAngle) - 5 * Math.cos(4 * heartAngle));
                break;
            case 'zigzag':
                x = 20 + index * 20;
                y = centerY + (index % 2 === 0 ? -30 : 30);
                break;
            case 'square':
                const side = Math.floor((index / letters.length) * 4);
                const pos = (index % (letters.length / 4)) / (letters.length / 4);
                if (side === 0) { x = 50 + pos * 200; y = 50; }
                else if (side === 1) { x = 250; y = 50 + pos * 200; }
                else if (side === 2) { x = 250 - pos * 200; y = 250; }
                else { x = 50; y = 250 - pos * 200; }
                break;
            case 'triangle':
                const baseX = 50 + t * 200;
                const heightY = 250 - (Math.abs(t - 0.5) * 2 * 150);
                x = baseX;
                y = heightY;
                break;
            case 'arch':
                x = 50 + index * 20;
                y = centerY - Math.pow(index - letters.length / 2, 2) * 0.15 + 40;
                break;
            case 'star':
                const starPoints = 10;
                const starRadius = (index % 2 === 0 ? 100 : 40);
                const starAngle = (index / starPoints) * Math.PI * 2;
                x = centerX + Math.cos(starAngle) * starRadius;
                y = centerY + Math.sin(starAngle) * starRadius;
                break;
        }

        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        output.appendChild(span);
    });
                  }
