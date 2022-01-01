export function SubscribeBox() {
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg md:py-12 md:px-12 xl:items-center">
          <div className="mt-8">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl pb-4">
              Queres recibir las notas en tu correo?
            </h2>
            <form className="sm:flex" action="https://tinyletter.com/metacrosa">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 ring-offset-gray-800 focus:ring-white rounded-md"
                placeholder="Tu email"
              />
              <input type="hidden" value="1" name="embed" />
              <button
                type="submit"
                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base text-white font-medium rounded-md bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 ring-offset-gray-500 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">Powered by Tinyletter.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
