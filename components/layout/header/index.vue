<template src="" >
  <header id="header" class="bg-logo text-white bg-image">
    <div class="container flex justify-between pt-70px pb-100px items-center">
      <div>
        <LayoutUiLogo />
      </div>
      <nav class="nav">
        <ul class="ul font-circular text-17px font-medium flex gap-50px scale-z-110">
          <li class="li">
            <NuxtLink to="/"
              >Home
              <span
                class="block bg-regular-1 w-30px h-3px text-center ml-auto mr-auto mt-6px"
              ></span>
            </NuxtLink>
          </li>

          <li class="li"><NuxtLink to="/">About</NuxtLink></li>
          <li class="li"><NuxtLink to="/">Services</NuxtLink></li>
          <li class="li"><NuxtLink to="/">Upcomming Packages</NuxtLink></li>
        </ul>
      </nav>
      <LayoutUiButton text="Get in Touch"></LayoutUiButton>
    </div>
  </header>
</template>

<script setup>
</script>

<style>
.scale-z-110 {
  --tw-scale-z: 1.1;

}
.li:hover {
  transition: all 1;
  transform: scale(1.1);
}
</style>
