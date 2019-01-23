function formatDate(number) {
	const a = new Date(number);
	const today = new Date();
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const year = a.getFullYear();
	const month = months[a.getMonth()];
	const date = a.getDate();
	const h = a.getHours();
	const suffix = (h >= 12)? 'pm' : 'am';
	const hour = (h > 12)? h -12 : h;
	const hours = (hour == '00')? 12 : hour;
	const m = a.getMinutes();
	const min = (m < 10)? ('0' + m) : m;

	if (a.setHours(0,0,0,0) == today.setHours(0,0,0,0))
		return 'today, ' + hours + ':' + min + suffix;
	else
		return month + ' ' + date + ' ' + year + ', ' + hours + ':' + min + suffix;
 }

	export default formatDate;
