export default defineAppConfig({
	ui: {
		toast: {
			slots: {
				root: 'bg-gray-600 text-white rounded-lg shadow-lg p-4',
				title: 'text-lg text-white',
				description: 'text-sm text-white',
				icon: 'text-white'
			}
		},
		input: {
			slots: {
				base: 'h-12 !text-white !bg-gray-600 rounded-[26px] min-w-[320px] sm:w-[440px]'
			}
		},
		inputTime: {
			slots: {
				base: 'h-12 !text-white !bg-gray-600 rounded-[26px] inline-flex items-center justify-center'
			}
		},
		inputMenu: {
			slots: {
				viewport: 'bg-gray-600',
				base: 'h-12 !text-white text-left !bg-gray-600 rounded-[26px] min-w-[320px] sm:w-[440px]',
				item: 'text-primary bg-gray-600 hover:bg-primary/70 rounded-0'
			}
		},
		calendar: {
			slots: {
				root: 'text-white bg-gray-600',
				gridBody: 'bg-gray-600',
				gridCell: 'text-white hover:bg-primary/70 rounded-0',
				gridCellCurrent: 'text-white bg-primary rounded-0',
				gridCellSelected: 'text-white bg-primary rounded-0'
			}
		},
		formField: {
			slots: {
				error: 'text-red-200 pl-4 text-sm'
			}
		},
		accordion: {
			slots: {
				item: 'border-b border-b-gray-400 text-gray-700'
			}
		}
	}
})
