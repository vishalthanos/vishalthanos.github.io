<template>
  <NavBarItemVue />
  <RouterView />
  <footer class="py-4 px-2 bg-[#b4b3b3]">
    <div class="flex justify-end mr-20 items-center">
      <div class="flex flex-col">
        <div class="flex justify-center items-center gap-4">
          <a href="https://www.instagram.com/vishal-thanos">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M17.5 6.51002L17.51 6.49902"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="#"
            ><svg
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8889 12.972C14.6556 12.1407 15.5778 10.8829 15.5778 8.9251C15.5778 5.06416 12.6556 4.12354 9.28333 4.12354H0V23.5048H9.54445C13.1222 23.5048 16.4833 21.8149 16.4833 17.8774C16.4833 15.4438 15.3111 13.6446 12.8889 12.972ZM4.32778 7.43213H8.38889C9.95 7.43213 11.3556 7.86416 11.3556 9.64697C11.3556 11.2931 10.2611 11.9548 8.71667 11.9548H4.32778V7.43213ZM8.95556 20.2126H4.32778V14.8751H9.04445C10.95 14.8751 12.1556 15.6571 12.1556 17.6423C12.1556 19.6001 10.7167 20.2126 8.95556 20.2126ZM28.8722 7.04932H20.8889V5.14072H28.8722V7.04932ZM32 16.6907C32 12.5399 29.5333 9.07822 25.0611 9.07822C20.7167 9.07822 17.7667 12.2938 17.7667 16.5048C17.7667 20.8743 20.5611 23.8712 25.0611 23.8712C28.4667 23.8712 30.6722 22.3618 31.7333 19.1517H28.2778C27.9056 20.3493 26.3722 20.9837 25.1833 20.9837C22.8889 20.9837 21.6833 19.6603 21.6833 17.4126H31.9667C31.9833 17.1829 32 16.9368 32 16.6907ZM21.6889 14.9845C21.8167 13.1415 23.0611 11.9876 24.9389 11.9876C26.9056 11.9876 27.8944 13.1251 28.0611 14.9845H21.6889Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="https://linkedin.com/vishal"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.429 8.969H13.143V10.819C13.678 9.755 15.05 8.799 17.111 8.799C21.062 8.799 22 10.917 22 14.803V22H18V15.688C18 13.475 17.465 12.227 16.103 12.227C14.214 12.227 13.429 13.572 13.429 15.687V22H9.429V8.969ZM2.57 21.83H6.57V8.799H2.57V21.83ZM7.143 4.55C7.14315 4.88528 7.07666 5.21724 6.94739 5.52659C6.81812 5.83594 6.62865 6.11651 6.39 6.352C5.9064 6.83262 5.25181 7.10165 4.57 7.1C3.88939 7.09954 3.23631 6.8312 2.752 6.353C2.51421 6.11671 2.32539 5.83582 2.19634 5.52643C2.0673 5.21704 2.00058 4.88522 2 4.55C2 3.873 2.27 3.225 2.753 2.747C3.23689 2.26816 3.89024 1.9997 4.571 2C5.253 2 5.907 2.269 6.39 2.747C6.872 3.225 7.143 3.873 7.143 4.55Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <a class="text-gray-50" href="https://">vishalhembrom3@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterView } from "vue-router";
import NavBarItemVue from "./components/NavBarItem.vue";
export default {
  components: {
    NavBarItemVue,
  },
};
</script>
