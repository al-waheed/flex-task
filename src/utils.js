export const getDays = (date) => {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const differenceMs = Math.abs(new Date() - new Date(date));
    return `${Math.round(differenceMs / ONE_DAY)} days ago`;

}

export const sortBydate = array => {
	return array.sort((a,b) => {
	  return new Date(b.createdAt) - new Date(a.createdAt)  
	})  
}

export const apiUrl = "https://gist.githubusercontent.com/Promhize/53efb745bc377b0fa40109954064f19e/raw/36c31f2041a016b767fdc912dcdfd1236e005890/2.events.json"
