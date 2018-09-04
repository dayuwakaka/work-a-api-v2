
(
	npm run docs:build 
	cd c:/github/work-a-api-v2/docs/.vuepress/dist 
	git init
	git add -A
	git commit -m 'deploy'
	git push -f git@github.com:dayuwakaka/work-a-api-v2.git master:gh-pages
	cd c:/github/work-a-api-v2/
)