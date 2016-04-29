export default function getUrl ( url ) {
	return 'http://localhost:${process.env.PORT || 3000}${url}';
}