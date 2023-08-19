<script>
  import Icon from "../Icon.svelte";
  import Button from "../Button.svelte";

  let content = [
    {
      icon: "pencil",
      title: "Step 1. Fill out the form",
      description: "",
    },
    {
      icon: "love",
      title: "Step 2. Send it out",
      description:
        "Lions Clubs from around the U.P. provide toys, cards, hats, quilts, pillowcases, love, and more to let our families know they aren't alone.",
    },
    {
      icon: "bill",
      title: "Step 3. Receive our help",
      description:
        "Fighting cancer is expensive. Our grants help with bills, such as rent, utilities, groceries, and the associated extensive medical charges.",
    },
  ];
</script>

<div class="w-full max-w-xs">
  <div
    class="
            w-full overflow-x-hidden
            relative
            flex flex-col items-center gap-8"
  >
    <p>
      If you or someone you love is fighting against childhood cancer, we are
      here to help. Simply follow the steps below to get started.
    </p>
    <div class="flex flex-col gap-4">
      <h4>
        <Icon id="pencil" styling="w-6 h-6 translate-y-1.5 mr-2" />
        Step 1. Fill out the form
      </h4>
      <p>
        Print out the PDF below and fill it out. If you prefer to stay digital,
        you may download the Word Document (DOCX) instead.
      </p>
      <div class="flex justify-between">
        <Button
          href="{import.meta.env
            .BASE_URL}/content/childhood-cancer-intake-form.pdf"
          ><span class="text-xs">Download (PDF)</span></Button
        >
        <Button
          href="{import.meta.env
            .BASE_URL}/content/childhood-cancer-intake-form.docx"
          ><span class="text-xs">Download (DOCX)</span></Button
        >
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h4>
        <Icon id="mail" styling="w-6 h-6 translate-y-1.5 mr-2" />
        Step 2. Send it out
      </h4>
      <p>If you printed the form, mail it to the following address:</p>
      <p>
        Childhood Cancer<br />
        PO Box 107<br />
        Engadine, MI 49827<br />
      </p>
      <p>
        Otherwise, email it to <a href="mailto:cc@uplionsserve.org"
          >cc@uplionsserve.org.</a
        >
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <h4>
        <Icon id="love" styling="w-6 h-6 translate-y-1.5 mr-2" />
        Step 3. Receive our help
      </h4>
      <p>
        Thank you for reaching out! We will get back to you as soon as we can.
      </p>
    </div>
  </div>
</div>
