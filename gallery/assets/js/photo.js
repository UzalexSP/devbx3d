const photos = [
            {
                id: "01",
                title: "Где-то в лесу",
                desc: "Гидропарк так прекрасен. Такое вдохновение оттуда можно получить.",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p1.png",
                original: "/assets/images/nform/Где-то в лесу.png"
            },
            {
                id: "02",
                title: "Осенний день",
                desc: "Красота, скрывается не только за картиной, но и за кадром.",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p2.png",
                original: "/assets/images/nform/Осенний день.png"
            },
            {
                id: "03",
                title: "Протёртая камера",
                desc: "Всеголишь протерев камеру, ты получаешь многое...",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p3.png",
                original: "/assets/images/nform/Протёртая камера.png"
            },
            {
                id: "04",
                title: "Кот",
                desc: "Какой же у крёстной мили кошак, хочу к нему еще раз прийти",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_04.webp",
                original: "/assets/images/nform/Кот.jpg"
            },
            {
                id: "05",
                title: "Все таки красива осень",
                desc: "Кому как, но пионерить камеру идея хорошая))",
                device: "Nikon P510",
                preview: "/assets/images/p_05.webp",
                original: "/assets/images/nform/Все таки красива осень.png"
            },
            {
                id: "06",
                title: "Ветка",
                desc: "Эта фотка использовалась для моего курсача, и заменило мне очень хорошим фоном, для карточек инсты))",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_06.webp",
                original: "/assets/images/nform/Ветка.png"
            },
            {
                id: "07",
                title: "Водопад",
                desc: "Походу лучший кадр на Никон камеру",
                device: "Nikon P510",
                preview: "/assets/images/p_07.webp",
                original: "/assets/images/nform/Водопад.png"
            },
            {
                id: "08",
                title: "Первая практика по фотошопу",
                desc: "Прекрасный фон для альбома, либо же для трека",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_08.webp",
                original: "/assets/images/nform/Первая практика по фотошопу.png"
            },
            {
                id: "09",
                title: "Дождливый парк",
                desc: "Любимая фотография сделана на самсу",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_09.webp",
                original: "/assets/images/nform/Дождливый парк.png"
            },
            {
                id: "10",
                title: "Шейдеры",
                desc: "Прекрасный вечерок, сидя на новом ноутбуке",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_10.webp",
                original: "/assets/images/nform/Шейдеры.png"
            },
            {
                id: "11",
                title: "Закат",
                desc: "Прогулка с кентом в этот вечер была лучшая для вечера",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_11.webp",
                original: "/assets/images/nform/Закат.jpg"
            },
            {
                id: "12",
                title: "Дамба, прекрасная вещь",
                desc: "Когда я только приехал в Житомир, я не ожидал, что этот город будет настолько красивым, для таких красивых снимков.",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_12.webp",
                original: "/assets/images/nform/Дамба, прекрасная вещь.png"
            },
            {
                id: "13",
                title: "Загадочная высоковольтная линия",
                desc: "Выглядит кинематографично...",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_13.webp",
                original: "/assets/images/nform/Загадочная высоковольтная линия.jpg"
            },
            {
                id: "15",
                title: "Речка",
                desc: "Говорил с старостой, и вижу, что-то красивое, сказал ему ''а нук братанчик погодь, тут красота полнейшая'' сделал снимок, вот и пожалуйста, кадр есть.",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_15.webp",
                original: "/assets/images/nform/Речка.png"
            },
            {
                id: "16",
                title: "Постройка объекта",
                desc: "Ну, ждем нового заселения",
                device: "Nikon P510",
                preview: "/assets/images/p_16.webp",
                original: "/assets/images/nform/Постройка объекта.png"
            },
            {
                id: "17",
                title: "Утренний туман",
                desc: "Сижу в университете, такой смотрю, а тут он какая красотень...",
                device: "Samsung Galaxy A35",
                preview: "/assets/images/p_17.webp",
                original: "/assets/images/nform/Утренний туман.jpg"
            },
            {
                id: "18",
                title: "Вечерний мост",
                desc: "Первая RAW фотография, очень ею рад.",
                device: "iPhone 15 Pro",
                preview: "/assets/images/p_18.webp",
                original: "/assets/images/nform/Вечерний мост.png"
            },
            {
                id: "19",
                title: "Плитка",
                desc: "Заинтересовался отражением в этой плитке, кажись кадр получился не особо плох",
                device: "iPhone 15 Pro",
                preview: "/assets/images/p_19.webp",
                original: "/assets/images/nform/Плитка.jpg"
            },
            {
                id: "20",
                title: "Высоковолка 2",
                desc: "Уже другая версия этой электробашни",
                device: "iPhone 15 Pro",
                preview: "/assets/images/p_20.webp",
                original: "/assets/images/nform/Высоковолка 2.png"
            },
            {
                id: "21",
                title: "Вечерний закат",
                desc: "Как же классно кататься на велосипеде под такие красивые кадры",
                device: "iPhone 15 Pro",
                preview: "/assets/images/p_21.webp",
                original: "/assets/images/nform/Вечерний закат.png"
            },
            {
                id: "22",
                title: "VHS - камеры легенд",
                desc: "Лучший кадр который я наверно запечатлил, который связан с водой",
                device: "iPhone 15 Pro",
                preview: "/assets/images/p_22.webp",
                original: "/assets/images/nform/vhs.jpg"
            },
            {
                id: "23",
                title: "Вид с моста",
                desc: "Ведь же умеют делать такие грандиозные виды",
                device: "iPhone 15 Pro",
                preview: "/assets/images/p_23.webp",
                original: "/assets/images/nform/Вид с моста.jpg"
            },
        ];

const galleryGrid = document.getElementById('gallery-grid');

        function renderGallery(items) {
            galleryGrid.innerHTML = '';
            items.forEach((item) => {
                const card = document.createElement('div');
                card.className = "group relative aspect-[4/5] bg-[#0c0c0c] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-end p-5 transition-all duration-300 hover:border-neutral-600";
                
                card.innerHTML = `
                    <img src="${item.preview}" alt="${item.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    <div class="relative z-10">
                        <div class="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1">
                            <span>// ${item.id}</span>
                            <span class="bg-black/60 px-2 py-0.5 border border-neutral-800 text-[10px] text-neutral-300">${item.device}</span>
                        </div>
                        <h4 class="text-white text-base font-bold mb-1 tracking-wide">${item.title}</h4>
                        <p class="text-xs text-neutral-400 mb-4 line-clamp-1">${item.desc}</p>
                        
                        <div class="flex items-center gap-2">
                            <button onclick="openModal('${item.id}')" class="flex-1 text-center bg-white/10 hover:bg-white text-white hover:text-black py-2 px-3 border border-white/20 transition-all font-mono text-xs uppercase tracking-wider">
                                Просмотр
                            </button>
                            <a href="${item.original}" download class="p-2 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white transition-all" title="Скачать">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                            </a>
                        </div>
                    </div>
                `;
                galleryGrid.appendChild(card);
            });
        }

        function filterGallery(device) {
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                btn.className = "filter-btn px-4 py-2 bg-neutral-900/60 text-neutral-400 hover:text-white border border-neutral-800 transition-all";
            });
            event.target.className = "filter-btn px-4 py-2 bg-white text-black border border-white transition-all";

            if (device === 'all') {
                renderGallery(photos);
            } else {
                const filtered = photos.filter(p => p.device.toLowerCase().includes(device.toLowerCase()));
                renderGallery(filtered);
            }
        }
        function openModal(id) {
            const item = photos.find(p => p.id === id);
            if (!item) return;

            document.getElementById('modal-title').innerText = item.title;
            document.getElementById('modal-desc').innerText = item.desc;
            document.getElementById('modal-device').innerText = `// УСТРОЙСТВО: ${item.device}`;
            document.getElementById('modal-img').src = item.original;
            document.getElementById('modal-download').href = item.original;
            
            const modal = document.getElementById('lightbox-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeModal() {
            const modal = document.getElementById('lightbox-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        renderGallery(photos);
