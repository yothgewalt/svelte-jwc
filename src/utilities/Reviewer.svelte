<script lang="js">
    export let reviewer, reviewMessage;
</script>

<div class="flex flex-col justify-center items-center">
    <div class="w-[182px] h-[182px] flex justify-center items-center tracking-wide text-lg rounded-full border-[2px] border-white 912px:text-2xl">
        สมมติว่านี่คือรูป
    </div>
    <h2 class="mt-6 mb-6 text-3xl">{reviewer}</h2>
    <p class="p-4 font-light text-md text-center">{reviewMessage}</p>
</div>