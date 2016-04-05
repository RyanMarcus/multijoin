# multijoin

[ ![Codeship Status for RyanMarcus/multijoin](https://codeship.com/projects/b7678bc0-d45a-0133-c638-0af10aec3b5e/status?branch=master)](https://codeship.com/projects/142411) [![codecov.io](https://codecov.io/github/RyanMarcus/multijoin/coverage.svg?branch=master)](https://codecov.io/github/RyanMarcus/multijoin?branch=master)


`npm install -g multijoin`

Using BSD (or UNIX) `join` command to merge multiple CSV files together based on their first column.

`file1`:

```
1,a
2,b
3,c
```

`file2`:

```
1,d
2,e
3,f
```

`file3`:

```
1,g
2,h
3,i
```


`multijoin file1 file2 file3`:

```
1,a,d,g
2,b,e,h
3,c,f,i
```


Copyright Ryan Marcus, 2016. GPLv3.
