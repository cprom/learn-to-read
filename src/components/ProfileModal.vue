<template>
    <div class="card flex justify-content-center">
        <button @click="openPosition('topright')" class="setting-btn"><font-awesome-icon class="setting-icon" icon="fa-solid fa-gear" size="sm" style="color: #B197FC;" /></button>
        <Dialog v-model:visible="visible" modal header="Settings" :style="{ width: '25rem' }">
            <div v-if="isAuthenticated">
                <div>
                    {{ user.email }}
                </div>
                <div class="logout-btn-wrapper">
                    <Button @click="logout" class="logout-btn">Logout</Button>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from '../composables/useAuth'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
const { isAuthenticated, logout, user } = useAuth()

const position = ref('topright');
const visible = ref(false);
const openPosition = (pos) => {
    position.value = pos;
    visible.value = true;
}


console.log(isAuthenticated)
</script>

<style>
.setting-icon {
    width: 10;
}


.setting-btn {
  text-align: center;
  padding: 0;
  margin: auto;
  width: 0px;
  height: 0px;
}
.p-link:focus {
    outline: none;
}
.p-link {
text-align: center;
margin: auto;
padding: 0;
width: 30px;
height: 30px;
margin-top: -35px;
background-color: white;
}

.logout-btn-wrapper {
    margin-top: 10px;
}

</style>