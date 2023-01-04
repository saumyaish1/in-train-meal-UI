<template>
    <!-- <div>
        <b-navbar bg="dark" variant="dark" expand="lg">
            <b-container fluid>
                <h2 class="text-light">
                    <img src="" alt="Logo"
                        width="90" height="90"/>
                    &nbsp;&nbsp;&nbsp;&nbsp; <b>In-Train Meal Delivery</b>
                </h2>
                <b-nav class="ms-auto">
                    <b-nav-item class="" href="/" active> Home</b-nav-item>
                    <b-nav-item href="/about">About Us</b-nav-item>
                    <b-nav-item href="/contact">Contact Us</b-nav-item>
                    <b-nav-item href="/policy">terms and policy</b-nav-item>
                </b-nav>
            </b-container>
        </b-navbar>
    </div> -->
    <div>
        <div>
            <b-navbar toggleable="sm" type="dark" variant="dark">

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto margin">
                        <h2 class="text-info">
                            <img src="../assets/food_coach.logo.png" alt="Logo" width="90" height="90" />
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>In-Train Meal Delivery</b>
                        </h2>
                    </b-navbar-nav>
                    <b-navbar-nav class="ms-auto margin">
                        <b-nav-item href="/">Home</b-nav-item>
                        <b-nav-item href="/register">Register</b-nav-item>
                        <b-nav-item href="/home">Contact</b-nav-item>
                        <b-nav-item href="/about">About Us</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>

            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainMenu'
};
</script>

<style scoped>
.nav-style {
    color: floralwhite;
}

.margin{
    margin: 0 4rem;
}
</style>