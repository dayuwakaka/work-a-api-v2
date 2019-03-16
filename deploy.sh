(
	npm run docs:build 
	cd docs/.vuepress/dist 
	git init
	git add -A
	git commit -m 'deploy'
	git pull
	git push -f git@github.com:dayuwakaka/work-a-api-v2.git master:gh-pages
)