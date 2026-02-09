export default defineAppConfig({
	ui: {
		toast: {
			slots: {
				root: 'bg-gray-600 text-white rounded-lg shadow-lg p-4',
				title: 'text-lg text-white',
				description: 'text-sm text-white',
				icon: 'text-white',
			}
		},
		input: {
			slots: {
				base: 'h-12 !text-white !bg-gray-600 rounded-[26px] min-w-[320px] sm:w-[440px]'
			}
		},
		inputMenu: {
			slots: {
				base: 'h-12 !text-white !bg-gray-600 rounded-[26px] min-w-[320px] sm:w-[440px]',
				item: 'text-primary bg-gray-600 hover:bg-primary/70 rounded-0',
			}
		},
		inputDate: {
			slots: {
				base: 'h-12 !text-white !bg-gray-600 rounded-[26px] min-w-[320px] sm:w-[440px] flex justify-center items-center !gap-10',
			}
		},
		formField: {
			slots: {
				error: 'text-red-200 pl-4 text-sm',
			}
		}
	}
})