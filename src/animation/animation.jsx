import confetti from 'canvas-confetti';

export function showPointIncreaseEffect() {
  const pointText = document.createElement('div');
  pointText.innerText = '+1000 points!';
  pointText.style.position = 'fixed';
  pointText.style.top = '50%';
  pointText.style.left = '50%';
  pointText.style.transform = 'translate(-50%, -50%)';
  pointText.style.color = 'gold';
  pointText.style.fontSize = '2rem';
  pointText.style.fontWeight = 'bold';
  pointText.style.zIndex = 9999;
  pointText.style.opacity = 1;
  document.body.appendChild(pointText);

  // 텍스트가 서서히 사라지도록 애니메이션 설정
  let opacity = 1;
  const fadeOut = setInterval(() => {
    opacity -= 0.05;
    pointText.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(fadeOut);
      document.body.removeChild(pointText);
    }
  }, 50);
}
