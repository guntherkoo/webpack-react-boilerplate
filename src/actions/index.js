export const Type = {
	INTRO: 'INTRO',
	LIST_VIEW: 'LIST_VIEW'
}

const introClick = () => {
	return {
		type: Type.INTRO
	};
}

const switchViews = view_type => {
	return {
		type: Type.LIST_VIEW,
		view_type
	}
}

export const Action = {
	introClick,
	switchViews
};