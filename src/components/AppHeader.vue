<template>
    <header class="Header">
        <div>
            <ul>
                <router-link to="/">Home</router-link> |
                <router-link to="/InputPop">Stack</router-link> |
                <router-link to="/test">test</router-link>
            </ul>
        </div>
    </header>
</template>

<style scoped>
    .Header {
        background-color: #f5f5f5;
        padding: 20px 0;
        text-align: left;
        font-size: 14px;
        margin-bottom: 0px;
    }

    .Header ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: left;
        gap: 20px;
    }

    .Header router-link {
        color: #555;
        text-decoration: none;
    }
</style>