<script lang="js">
    export let slogan, buttonLabel;
</script>

<section class="w-full h-auto mt-10 mb-16 bg-inherit 912px:mb-36" as="hero">
    <div class="container mx-auto max-w-4xl overflow-hidden">
        <div class="h-full flex flex-col justify-center items-center space-y-7">
            <h1 class="p-1 text-6xl">หมอหมึก</h1>
            <p class="font-light text-lg text-center tracking-wide">{slogan}</p>
            <button class="px-14 py-3 font-medium text-lg text-[#612378] bg-white">{buttonLabel}</button>
        </div>
    </div>
</section>