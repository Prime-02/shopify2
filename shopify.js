        
        const signupButton = document.getElementById('signup');
        const signinButton = document.getElementById('signin');
        const main = document.getElementById('main');
        const loginForm = document.getElementById('loginForm');
        const loginStatus = document.getElementById('loginStatus');

        signupButton.addEventListener("click", () => {
            main.classList.add("right-panel-active");
        }); 
        signinButton.addEventListener("click", () => {
            main.classList.remove("right-panel-active");
        }); 

        let Para = document.querySelector('.para')
        let Form = document.querySelector('#signupForm');
        const Heading2 = document.querySelector('.heading2')
         let Name = document.querySelector('.name');
         let Email = document.querySelector('.email');
         let Psd = document.querySelector('.psd');
         let Psd2 = document.querySelector('.psd2');
         let Button = document.querySelector('.button');
         let clearButton = document.querySelector('.clear');
         let savedInfo = [];
         Button.addEventListener("click", () => {
            event.preventDefault();
            if(validateInfo()){
                if(Psd.value === Psd2.value){
                 signUp();
            Form.reset();
                } else{
                    Para.innerHTML = 'Passwords do not match!'
                }
            }
           
         });
        //  Name.addEventListener("input", () => {
        //     Heading2.innerHTML = `Hello ${Name.value}`;
        // });

         function validateInfo() {
            if(!Form.checkValidity()){
                Para.innerHTML = "Your information does not meet up with the requirements!";
                Form.reset();
                return false;
            }
            else{
                return true;
            }
         }

         function signUp() {     
            let emailExists = savedInfo.some(user => user.email === Email.value);
            let nameExists = savedInfo.some(user => user.name === Name.value);
            if (emailExists) {
                Para.innerHTML = 'Email has already been used!';
                return;
            };
            if (nameExists) {
                Para.innerHTML = 'Username has already been used!';
                return;
            };
            let userInfo = {
                name: Name.value,
                email: Email.value,
                psd: Psd.value, 
            };
            savedInfo.push(userInfo); // Push user info to the array
            localStorage.setItem('storedInfo', JSON.stringify(savedInfo)); // Store updated array in local storage
            console.log(savedInfo);
            window.location.href = "shopify4.html"
         };
         loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            Form.reset();

            // Retrieve stored user info from localStorage
            const storedInfo = JSON.parse(localStorage.getItem('storedInfo'));

            if (storedInfo) {
                const user = storedInfo.find(userInfo => userInfo.email === email);

                if (user) {
                    // Check if the entered password matches the stored password
                    if (user.psd === password) {
                        loginStatus.textContent = 'Login successful!';
                    } else {
                        loginStatus.textContent = 'Incorrect password. Please try again.';
                    }
                } else {
                    loginStatus.textContent = 'Email not found. Please sign up first.';
                }
            } else {
                loginStatus.textContent = 'No users found. Please sign up first.';
            }
        });

         // Retrieving stored info from local storage
         let returnedInfo = JSON.parse(localStorage.getItem('storedInfo'));
         console.log(returnedInfo);
        