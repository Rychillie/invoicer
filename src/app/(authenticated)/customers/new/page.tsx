import { Container } from '@/components/ui';

export default function CustomerPage() {
  return (
    <main className="flex size-full items-center justify-center">
      <Container className="flex-col py-10">
        <h1 className="text-3xl font-semibold">New Customer</h1>
        <p className="mt-2 text-gray-600">Create a new customer</p>
        <hr className="my-5 w-full border-gray-300" />
        <form>
          <div className="mb-6">
            <input
              type="file"
              className="flex w-1/3 cursor-pointer border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-b border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-b border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 block w-full border-b border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </form>
      </Container>
    </main>
  );
}
