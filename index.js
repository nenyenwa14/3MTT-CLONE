const btn = document.getElementById("main-btn")
        document.querySelector(".main-btn").addEventListener("click", () => document.querySelector(".nav").classList.toggle("show"))



        const accordionItems = document.querySelectorAll('.accordon-list');

            accordionItems.forEach((item) => {
            item.addEventListener('click', function() {
            toggleActiveState(this);
            toggleIcons(this);
            });
        });

        function toggleActiveState(clickedItem) {
         accordionItems.forEach((item) => {
        if (item !== clickedItem) {
            item.classList.remove('active');
             }
         });
            clickedItem.classList.toggle('active');
        }

        function toggleIcons(clickedItem) {
            const icons = clickedItem.querySelectorAll('i');
            icons.forEach((icon) => {
                if (icon.classList.contains('fa-plus')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else if (icon.classList.contains('fa-minus')) {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                } else if (icon.classList.contains('fa-angle-right')) {
                    icon.classList.remove('fa-angle-right');
                    icon.classList.add('fa-angle-down');
                } else if (icon.classList.contains('fa-angle-down')) {
                    icon.classList.remove('fa-angle-down');
                    icon.classList.add('fa-angle-right');
                }
            });
        }