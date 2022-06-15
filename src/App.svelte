<script>
    import Header from "./components/Header.svelte";
    import Hero from "./components/Hero.svelte";
    import Information from "./components/Information.svelte";
    import Review from "./components/Review.svelte";
    import Contact from "./components/Contact.svelte";

    import Navigator from "./utilities/Navigator.svelte";
    import Reviewer from "./utilities/Reviewer.svelte";

    let headerPackage = [
        {
            id: 1,
            destination: null,
            label: "เกี่ยวกับหมอหมึก"
        },
        {
            id: 2,
            destination: null,
            label: "บทความ"
        },
        {
            id: 3,
            destination: null,
            label: "จองคิว"
        }
    ];

    let heroPackage = {
        slogan: "ผู้มีประสับการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ",
        buttonLabel: "จองคิว"
    };

    let informationPackage = {
        messageOne: "หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ",
        messageTwo: "ด้วยความสามารถที่หลากหลาย ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด",
    };

    let reviewPackage = [
        {
            id: 1,
            reviewer: "แมทธิว นักธุรกิจ",
            reviewMessage: "หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากมาย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ",
        },
        {
            id: 2,
            reviewer: "แจ็ค นักแสดง",
            reviewMessage: "ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ",
        },
        {
            id: 3,
            reviewer: "น้ำใส นักศึกษา",
            reviewMessage: "ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิคคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้ายๆ ทันเวลา",
        }
    ];

    let contactPackage = {
        emailContact: "octopus_fortune@teller.com",
        phoneContact: "099-XXX-XXXX"
    };
</script>

<Header>
    {#each headerPackage as {id, destination, label}, _index (id)}
        <Navigator destination={destination} label={label} />
    {/each}
</Header>

<main class="antialiased font-chakra-petch text-[#ffffff] bg-[#612378]">
    <Hero {...heroPackage} />
    <Information {...informationPackage} />
    <Review>
        {#each reviewPackage as {id, reviewer, reviewMessage}, _index (id)}
            <Reviewer reviewer={reviewer} reviewMessage={reviewMessage} />
        {/each}
    </Review>
    <Contact {...contactPackage} />
</main>