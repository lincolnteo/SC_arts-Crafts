
document.addEventListener('DOMContentLoaded', function() {
    // Service details
    const serviceDetails = {
        tufting: {
            title: "Tufting",
            desc: "Dive into the world of tufting! In this workshop, you'll learn how to use a tufting gun to create your own custom rugs or wall art. All materials provided, suitable for beginners and experienced crafters.",
            images: [
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            ]
        },
        bearbrick: {
            title: "Bearbrick Pour Painting",
            desc: "Express yourself with our Bearbrick pour painting session! Use vibrant acrylics and pouring techniques to decorate your own Bearbrick collectible. Take home a unique art toy you designed.",
            images: [
                "/img/bear2.jpg",
                "/img/bear3.jpg",
                "/img/bear4.jpg",
                "/img/bear5.jpg"
            ]
        },
        neon: {
            title: "DIY Neon Sign",
            desc: "Light up your space! Design and assemble your own neon sign using flexible LED neon strips. Choose your favorite shapes, words, or icons. Perfect for gifts or room decor.",
            images: [
                "/img/neon2.jpg",
                "/img/neon3.jpg",
                "/img/neon4.jpg",
                "/img/neon5.jpg"
            ]
        }
    };

    // Bulk Orders Modal Data
    const bulkDetails = {
        title: "Bulk Orders & Big Groups",
        desc: "We offer special packages and custom workshops for large groups and events. Perfect for corporate team building, weddings, birthdays, schools, and more! Get in touch for a tailored quote and unique experience.",
        images: [
            "/img/bulk2.jpg",
            "/img/bulk3.jpg",
            "/img/bulk4.jpg",
            "/img/bulk5.jpg"
        ],
        list: [
            "Corporate Team Building & Ice Breaking",
            "Wedding Activities & Favors",
            "Birthday Parties (Kids & Adults)",
            "School or Club Events",
            "Custom Group Workshops"
        ]
    };

    // Service cards click (including image click)
    document.querySelectorAll('.card[data-service]').forEach(card => {
        card.addEventListener('click', function() {
            const key = card.getAttribute('data-service');
            const detail = serviceDetails[key];
            if (detail) {
                document.getElementById('modalDetails').innerHTML = `
                    <h3>${detail.title}</h3>
                    <p>${detail.desc}</p>
                    <div class="modal-images">
                        ${detail.images.slice(0,4).map(img => `<img src="${img}" alt="${detail.title}">`).join('')}
                    </div>
                `;
                document.getElementById('serviceModal').classList.remove('hidden');
            }
        });
        // Also make the image inside the card clickable
        const img = card.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                card.click();
            });
        }
    });

    // Bulk orders section click
    const bulkOrdersSection = document.getElementById('bulk-orders');
    if (bulkOrdersSection) {
        bulkOrdersSection.addEventListener('click', function() {
            document.getElementById('bulkModalDetails').innerHTML = `
                <h3>${bulkDetails.title}</h3>
                <p>${bulkDetails.desc}</p>
                <ul style="list-style: none; padding: 0; font-size: 1.1rem; margin: 1.5rem 0;">
                    ${bulkDetails.list.map(item => `<li>• ${item}</li>`).join('')}
                </ul>
                <div class="modal-images">
                    ${bulkDetails.images.map(img => `<img src="${img}" alt="Bulk Orders">`).join('')}
                </div>
            `;
            document.getElementById('bulkModal').classList.remove('hidden');
        });
        // Also make the image inside the section clickable
        const img = bulkOrdersSection.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                bulkOrdersSection.click();
            });
        }
    }

    // Modal close buttons
    const closeModal = document.getElementById('closeModal');
    if (closeModal) {
        closeModal.onclick = function() {
            document.getElementById('serviceModal').classList.add('hidden');
        };
    }
    const closeBulkModal = document.getElementById('closeBulkModal');
    if (closeBulkModal) {
        closeBulkModal.onclick = function() {
            document.getElementById('bulkModal').classList.add('hidden');
        };
    }

    // Optional: close modal when clicking outside modal-content
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    }
    const bulkModal = document.getElementById('bulkModal');
    if (bulkModal) {
        bulkModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    }
});

