<template>
    <v-menu min-width="200px">
        <template #activator="{ props }">
            <v-btn
                icon
                v-bind="props">
                <v-avatar
                    color="brown"
                    size="large">
                    <span class="text-h5">ДА</span>
                </v-avatar>
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <div class="mx-auto text-center">
                    <v-avatar color="brown">
                        <span class="text-h6">ДА</span>
                    </v-avatar>
                    <h3>Давид Алиев</h3>
                    <p class="text-caption mt-1">email@gmail.com</p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        to="/lk"
                        rounded
                        variant="text">
                        Личный кабинет
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                        rounded
                        variant="text">
                        Выйти
                    </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-menu>
</template>
