
            document.querySelectorAll('.showroom').forEach(item => {
                item.addEventListener('touchstart', () => {
                    item.style.transform = 'scale(1.2)';
                });
                item.addEventListener('touchend', () => {
                    item.style.transform = 'scale(1)';
                });
            });
                let group = 0;

                const cartdefault = document.querySelectorAll('.cart-default');

                bg.forEach(cartdefault => {
                    bg.addEventListener('click', function () {
                            itemCount++;

                            document.getElementById(group).innerText = itemCount;
                        })
                })