<template>
    <nav
        class="navbar is-success"
        role="navigation"
        aria-label="main navigation"
    >
        <div
            ref="navbarMenuRef"
            class="container is-max-desktop px-2"
        >
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Noteballs
                </div>

                <a
                    @click.prevent="showMobileNav = !showMobileNav"
                    class="navbar-burger"
                    :class="{ 'is-active': showMobileNav }"
                    ref="navbarBurgerRef"
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
import { onClickOutside } from '@vueuse/core'

/**
 * Mobile nav
 */

const showMobileNav = ref(false),
    navbarMenuRef = ref(null),
    navbarBurgerRef = ref(null);

onClickOutside(navbarMenuRef, () => {
    showMobileNav.value = false;
}, {
    ignore: [navbarBurgerRef]
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