//let radha = gsap.radhaKrinshn();

//radha.add("(min-width: 800px)",()=>{
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start: "50% 50%",
    end: "130% 50%",
    scrub: 1,
  },
});
//});

tl.to(
  "#leaf1",
  {
    top: "120%",
    left: "80%",
    rotate: 90,
  },
  "timeO"
).to(
  "#leaf2",
  {
    top: "105%",
    left: "5%",
    rotate: 120,
  },
  "timeO"
);

tl.to(
  "#fanta",
  {
    bottom: "-60%",
    left: "9%",
  },
  "timeO"
);

tl.to(
  "#orange2",
  {
    top: "100%",
    left: "16%",
  },
  "timeO"
);

// tl.to(
//     "#orange",
//     {
//         top: "100%",
//         // left: "6%",
//     },
//     "time0"
//   );

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "50% 50%",
    end: "200% 100%",
    scrub: 1,
    // markers: true
  },
});

tl2.to(
  "#fanta",
  {
    // width:"30%",
    bottom: "-166%",
    left: "35%",
  },
  "a"
);

tl2.to(
    "#orange",
    {
        top: "200%",
        // left: "6%",
      
    },
    "a"
  );


