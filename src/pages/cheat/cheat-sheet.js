export const cheatSheet = [
  {
    title: "Svelte Component",
    content: `<!-- Widget.svelte -->
<script>
  export let textValue
</script>

<div class="container">
  {textValue}
</div>

<style>
.container {
  color: blue;
}
</style>

<!-- App.svelte -->
<script>
  import Widget from './Widget.svelte'
  const title = 'App'
</script>

<header>{title}</header>

<Widget textValue="I'm a svelte component" />
`
  },
  {
    title: "Expressions",
    content: `<script>
  let isShowing = true
  let cat = 'cat'
  let user = {name: 'John Wick'}
  let email = 'professionalkiller@gmail.com'
</script>

<p>2 + 2 = {2 + 2}</p>
   
<p on:click={() => isShowing = !isShowing}>
  {isShowing 
    ? 'NOW YOU SEE ME 👀' 
    : 'NOW YOU DON\`T SEE ME 🙈'}
</p>

<p>My e-mail is {email}</p>
<p>{user.name}</p>
<p>{cat + \`s\`}</p>
<p>{\`name \${user.name}\`}</p>`

  },
  {
    title: "Simple Bind",
    content: `//MyLink.svelte
<script>
    export let href = ''
    export let title = ''
    export let color = ''
</script>

<a href={href} style={\`color: \${color}\`} >
  {title}
</a>

// Shorthand
<a {href} style={\`color: \${color}\`} >
  {title}
</a>

<script>
  import MyLink from "./components/MyLink";
  let link = {
    href: "http://www.mysite.com",
    title: "My Site",
    color: "#ff3300"
  };
</script>

<MyLink {...link} />
`
  },
  {
    title: "Two Way Bind",
    content: `<MyInput bind:value={value} />

// Shorthand
<MyInput bind:value />

<select multiple bind:value={fillings}>
  <option value="Rice">Rice</option>
  <option value="Beans">Beans</option>
  <option value="Cheese">Cheese</option>
</select>

<input 
  type="radio" 
  bind:group={tortilla} 
  value="Plain" />
<input
  type="radio" 
  bind:group={tortilla} 
  value="Whole wheat" />

<input 
  type="checkbox" 
  bind:group={fillings} 
  value="Rice" />
<input 
  type="checkbox" 
  bind:group={fillings} 
  value="Beans" />

// Element Binding
<script>
  let myDiv
</script>

<button on:click={() => myDiv.innerText = 'My text'}>
  Click
</button>

<div bind:this={myDiv}/>
`
  },
  {
    title: 'Use action',
    content: `<script>
  function myFunction(node) {
    // the node has been mounted in the DOM
    return {
      destroy() {
        // the node has been removed from the DOM
      }
    };
  }
</script>

<div use:myFunction></div>
    `
  },
  {
    title: "Conditional Render",
    content: `{#if condition}
  <p>Condition is true</p>
{:else if otherCondition}
  <p>OtherCondition is true</p>
{:else}
  <p>Any Condition is true</p>
{/if}

// Re render
{#key value}
	<div transition:fade>{value}</div>
{/key}
`
  },
  {
    title: "Await Template",
    content: `{#await promise}
  <p>waiting for the promise to resolve...</p>
{:then value}
  <p>The value is {value}</p>
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
`

  },
  {
    title: "Render HTML",
    content: `<scrit>
  const myHtml = '<span><strong>My text:</strong> text</span>'
</scrit>

{@html '<div>Content</div>'}

{@html myHtml}
`

  },
  {
    title: "Handle Events",
    content: `<button on:click={handleClick}>
  Press me
</button>

<button on:click={() => console.log('I was pressed')}>
  Press me
</button>

<button on:click|once={handleClick}>
  Press me
</button>

<button on:submit|preventDefault={handleClick}>
  Press me
</button>
`
  },
  {
    title: "Forwarding Event",
    content: `// Widget.svelte
<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>
<button on:click={() => dispatch('message', { text: 'Hello!' })} />
<button on:click>Press me</button>

// App.svelte
<script>
import Widget from '.Widget.svelte'
</script>

<Widget 
  on:click={() => alert('I was clicked')} 
  on:message={e => alert(e.detail.text)}>

`
  },
  {
    title: "Rendering List",
    content:
      `<ul>
  {#each items as item}
  <li>{item.name} x {item.qty}</li>
  {:else}
  <li>Empty list</li>
  {/each}
</ul>

//INDEX
{#each items as item, index}
  <li>
    {index + 1}: {item.name} x {item.qty}
  </li>
{/each}

//INDEX                       (KEY)
{#each items as item, index (item.id)}
  <li>
    {index + 1}: {item.name} x {item.qty}
  </li>
{/each}
`

  },
  {
    title: "Using Slot",
    content:
      `<!-- Widget.svelte -->
<div>
  <slot>Default content</slot>
</div>

<!-- App.svelte -->
<Widget />
<Widget>
  <p>I   changed the default content</p>
</Widget>
`

  },
  {
    title: "Multiple Slot",
    content:
      `<!-- Widget.svelte -->
<div>
  <slot name="header">
    No header was provided
  </slot>

  <slot>
    <p>Some content between header and footer</p>
  </slot>

  <slot name="footer" />
</div>

<!-- App.svelte -->
<Widget>
  <h1 slot="header">Hello</h1>
  <p slot="footer">
    Copyright (c) 2020 Svelte Brazil
  </p>
</Widget>

<!-- FancyList.svelte -->
<ul>
{#each items as item}
  <li class="fancy">
    <slot name="item" {item} />
  </li>
{/each}
</ul>

<!-- App.svelte -->
<FancyList {items}>
  <div slot="item" let:item>
    {item.text}
  </div>
</FancyList>
`

  },
  {
    title: "Class Binding",
    content: `<script>
   export let type = 'normal'
   export let active = true
</script>

<div class={active ? active : ''}  class={type}>
...
</div>

<div class:active={active} class={\`otherClass \${type}\`}>
...
</div>


// Match class

<div class:active>...</div>
`

  },
  {
    title: "Lifecycle",
    content:
      `
<script>
import onMount from 'svelte'

onMount(() => {
  console.log('Mounting')
  return () => (consolo.log('going out'))
})
</script>


// Other lifecycle functions
[
  onMount(() => {}),
  beforeUpdate(() => {}),
  afterUpdate(() => {}),
  onDestroy(() => {})
]`

  },
  {
    title: "Animations",
    content:
      `<script>
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  let list = [1, 2, 3];
</script>

{#each list as n (n)}
  <div animate:flip={{ 
    delay: 250, 
    duration: 250, 
    easing: quintOut
  }}>
    {n}
  </div>
{/each}
`
  },
  {
    title: "Transitions",
    content:
`<script>
  import { fade } from "svelte/transition";
  export let condition;
</script>

{#if condition}
  <div transition:fade={{ delay: 250, duration: 300 }}>
    fades in  and out
  </div>
{/if}

// Other transitions
[Blur, Scale, Fly, Draw, Slide]
`
  },
  {
    title: "Reactive Expressions",
    content:
`<script>
let num = 0
$: squared = num * num
$: cubed = squared * num
</script>

<button on:click={() => num = num + 1}>
  Increment: {num}
</button>

<p>{squared}</p>
<p>{cubed}</p>
`
  },
  {
    title: "Reactive Statement",
    content:
`<script>
  $: if (count >= 10) {
    alert('count is dangerously high!')
    count = 9
  }
</script>
`
  },
]
