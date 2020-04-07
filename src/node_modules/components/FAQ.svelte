<script>
  import ShadedGrid from "./layout/ShadedGrid.svelte";
  import Question from "./Question.svelte";

  const questions = [
    {
      question: "What is this?",
      answer:
        "Since corona virus started spreading across the globe a lot of people are self-isolating. This means that we can't really host or go to meetups anymore so to combat this we'll be hosting an online meetup. A full day of Svelte content for you to enjoy."
    },
    {
      question: "Can anyone give a talk?",
      answer:
        "Of course! We welcome anyone that is interested to give a talk. If you're a first-timer we can give some tips and tricks to get you started. Drop by the svelte chat (svelte.dev/chat) and give ping me (Kev) in the meetup channel and i'll try my best to help you."
    },
    {
      question: "Practically, how will this be done?",
      answer:
        "The plan is to utilize Twitch, Youtube or both to stream the recorded talks over a whole day."
    },
    {
      question: "What do I need to do?",
      answer:
        "Simply watch the stream! :) If you want you can also engage with the speakers live during the event."
    }
  ];
</script>

<ShadedGrid title="Frequently Asked Questions">
  {#each questions as { question, answer }}
    <Question {question} {answer} />
  {/each}
</ShadedGrid>
