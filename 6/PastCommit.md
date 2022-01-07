There are two date variable which Git used to keep the time of commits:
GIT_COMMITTER_DATE
GIT_AUTHOR_DATE

You can change the time of commit with --date switch:
$ git commit --date='2011-12-03 12:12:45 -m 'commit message'

The --date switch only allows you to specify the author date (meaning only GIT_AUTHOR_DATE is modified, not GIT_COMMITTER_DATE)
Solution: to set a specific date export it to environment and then commit your code without --date switch ;)

export GIT_AUTHOR_DATE="YYYY-MM-DDThh:mm:ss±hh:mm"
export GIT_COMMITTER_DATE="YYYY-MM-DDThh:mm:ss±hh:mm"

$ git commit --date='2022-01-06 12:12:45 -m 'commiting from the future to the past'