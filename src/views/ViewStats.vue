<template>
    <div class="stats">
        <div class="table-container">
            <table class="table is-fullwidth">
                <thead></thead>
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Number of notes</td>
                        <td>{{ storeNotes.notes.length }}</td>
                    </tr>
                    <tr>
                        <td>Number of characters (of all notes)</td>
                        <td>{{ storeNotes.totalCharactersCount }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
/**
 * imports
 */

import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();
</script>