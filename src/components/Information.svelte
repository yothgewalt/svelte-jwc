<script lang="js">
    import Container from "./../utilities/Container.svelte";

    export let messageOne, messageTwo;
</script>

<section class="w-full h-auto mt-10 mb-16 bg-inherit 912px:mb-36" as="information">
    <Container>
        <div class="flex flex-col-reverse justify-between items-center 912px:flex-row">
            <div class="px-4 w-[350spx] flex flex-col justify-center items-start 912px:w-[540px]">
                <h2 class="mb-5 mt-20 text-3xl 912px:mb-2 912px:mt-0 912px:text-4xl">ประวัติหมอหมึก</h2>
                <p class="font-light text-[16px] break-words 912px:hidden">{messageOne + messageTwo}</p>
                <p class="mb-4 hidden font-light text-[21px] break-words 912px:inline">{messageOne}</p>
                <p class="text-lg hidden font-light text-[20px] break-words 912px:inline">{messageTwo}</p>
            </div>
            <div class="px-16 py-32 text-center text-xl border-[2px] border-white">
                สมมติว่านี่คือรูป
            </div>
        </div>
    </Container>
</section>