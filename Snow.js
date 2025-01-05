// Kar taneleri oluşturma
function createSnowFlake() {
	// Yeni bir kar tanesi elementi oluştur
	const snowflake = document.createElement("div");
	snowflake.classList.add("snowflake");
	snowflake.innerHTML = "&#10052;";  // Kar tanesi sembolü (❄)

	// Rastgele pozisyon ve Özellikler
	const randomX = Math.random() * window.innerWidth; // Rastgele X pozisyonu
	const randomSize = Math.random() * 10 + 20;  // 10 px ile 20 px arasında boyut
	const randomDuration = Math.random() * 2 + 1;  // 1s ile 3s arasında bekleme süresi

	// Stilleri kar tanesine uygula
	snowflake.style.left = `${randomX}px`;
	snowflake.style.fontSize = `${randomSize}px`;
	snowflake.style.animationDuration = `${randomDuration}s`;

	// Kar tanesini body'e ekle
	document.body.appendChild(snowflake);

	// Animasyon tamamlandıktan sonra kar tanesini kaldır
	setTimeout(() => {
		snowflake.remove();
	}, randomDuration * 1000);
}

// Her 200ms de bir kar tanesi oluştur
setInterval(createSnowFlake, 200);