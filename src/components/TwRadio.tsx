const TwRadio = () => {
  return (
    <div>
      <fieldset>
        <legend className=" dark:bg-black">Published status</legend>
        <input
          id="draft"
          className="peer/draft"
          type="radio"
          name="status"
          checked
        />
        <label className="peer-checked/draft:text-sky-500">Draft</label>

        <input
          id="published"
          className="peer/published"
          type="radio"
          name="status"
        />
        <label className="peer-checked/published:text-sky-500">Published</label>

        <div className="hidden shadow-sm  peer-checked/draft:block">
          Drafts are only visible to administrators.
        </div>
        <div className="hidden peer-checked/published:block">
          Your post will be publicly visible on your site.
        </div>
        <div>
          <h2>Categories</h2>
          <ul className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
            <li>Sales</li>
            <li>Marketing</li>
            <li>SEO</li>
          </ul>
        </div>
      </fieldset>
    </div>
  );
};

export default TwRadio;
