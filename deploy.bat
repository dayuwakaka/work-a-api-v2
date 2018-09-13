
(
	npm run docs:build 
	cd d:/docs/A_api/work-a-api-v2/docs/.vuepress/dist 
	git init
	git add -A
	git commit -m 'deploy'
	git push -f git@github.com:dayuwakaka/work-a-api-v2.git master:gh-pages
	cd d:/docs/A_api/work-a-api-v2/
)