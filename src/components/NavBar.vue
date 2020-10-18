<template>
  <div>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav_btn">
                <router-link to="/friends" class="nav__link">
                    <i class="far fa-user fa-2x"></i>
                </router-link>
            </li>
            <li class="nav_btn">
                <router-link to="/chats" class="nav__link">
                    <span class="nav__notification badge">1</span>
                    <i class="far fa-comment fa-2x"></i>
                </router-link>
            </li>
            <li class="nav_btn">
                <router-link to="/news" class="nav__link">
                    <i class="far fa-newspaper fa-2x"></i>
                </router-link>
            </li>
            <li class="nav_btn">
                <router-link  to="/settings" class="nav__link">
                    <span class="nav__noticeMark"></span>
                    <i class="fas fa-cog fa-2x"></i>
                </router-link>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>