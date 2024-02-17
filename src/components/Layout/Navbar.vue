<template>
    <nav
        class="navbar is-success"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="container is-max-desktop px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Noteballs
                </div>

                <a
                    @click.prevent="showMobileNav = !showMobileNav"
                    class="navbar-burger"
                    :class="{ 'is-active': showMobileNav }"
                    role="button"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div
                class="navbar-menu"
                :class="{ 'is-active': showMobileNav }"
                id="navbarBasicExample"
            >
                <div class="navbar-end">
                    <RouterLink
                        to="/"
                        class="navbar-item"
                        active-class="is-active"
                    >
                        Notes
                    </RouterLink>
                    <RouterLink
                        to="/stats"
                        class="navbar-item"
                        active-class="is-active"
                    >
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
/**
 * Imports
 */
import { ref } from 'vue';

/**
 * Mobile nav
 */

const showMobileNav = ref(false)

document.addEventListener("click", (event) => {
    if (!event.target.className == "navbar-burger" || !event.target.closest(".navbar-burger")) {
        showMobileNav.value = false;
    }
});
</script>

<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>