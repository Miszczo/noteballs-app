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
                <div class="navbar-item is-size-4 is-family-monospace">Noteballs
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
                <div
                    v-if="storeAuth.user.id"
                    class="navbar-start"
                >
                    <button
                        @click="logout()"
                        class="button is-small is-info mt-3 ml-3"
                    >
                        Log out {{ storeAuth.user.email }}
                    </button>
                </div>
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
 * imports
 */

import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreAuth } from '@/stores/storeAuth';

/**
 * store
 */

const storeAuth = useStoreAuth();

/**
 * mobile nav
 */

const showMobileNav = ref(false),
    navbarMenuRef = ref(null),
    navbarBurgerRef = ref(null);

onClickOutside(
    navbarMenuRef,
    () => {
        showMobileNav.value = false;
    },
    {
        ignore: [navbarBurgerRef],
    }
);

/**
 * logout
 */

const logout = () => {
    storeAuth.logoutUser();
    showMobileNav.value = false;
}

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
