<script lang="js">
    import Container from "./../utilities/Container.svelte";
</script>

<section class="w-full h-auto mt-10 mb-16 bg-inherit 912px:mb-36" as="review">
    <Container>
        <div class="flex flex-col space-y-20 justify-center items-center">
            <h1 class="p-1 font-light text-4xl">รีวิวจากลูกค้า</h1>
            <div class="grid grid-rows-1 justify-items-center 912px:grid-cols-3">
                <slot></slot>
            </div>
        </div>
    </Container>
</section>