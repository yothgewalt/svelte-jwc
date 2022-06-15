<script>
    import Container from "./../utilities/Container.svelte";

    export let emailContact, phoneContact;
</script>

<section class="w-full h-auto mt-10 mb-10 bg-inherit" as="contact">
    <Container>
        <div class="w-full h-full px-4 flex flex-col-reverse justify-between items-center 912px:flex-row">
            <div class="mt-16 px-16 py-32 text-xl text-center border-[2px] border-white 912px:mt-0 912px:px-32 912px:py-48">สมมติว่านี่คือแผนที่</div>
            <div class="flex flex-col font-light text-sm justify-center items-start 912px:text-xl">
                <h1 class="pt-1 mb-5 font-light text-[1.8rem] 912px:text-[2.6rem]">ทำนายชะตากับหมอหมึก</h1>
                <div class="mb-5 text-sm 912px:text-xl">
                    <p>สามารถจองคิวได้ในเว็บหรือ</p>
                    <p>อีเมล์: {emailContact}</p>
                    <p>โทรศัพท์: {phoneContact}</p>
                    <p>ละมาที่สำนักที่</p>
                    <p>ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ</p>
                    <p>เขตอินเตอร์เน็ต กรุงเทพ 99999</p>
                    <p>ตามวันเวลาทีนัดไว้</p>
                </div>
                <p>จำกัดที 10 คิวต่อหนึ่งวัน เปิดทำกร</p>
                <p>10.00 - 18.30 น. พัก 12.00 - 13.00</p>
                <p>เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์</p>
            </div>
        </div>
    </Container>
</section>