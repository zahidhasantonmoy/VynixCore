@echo off
setlocal

REM Add all changes
git add .

REM Commit with a timestamp message
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "datestamp=%YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"

git commit -m "Auto commit at %datestamp%"

REM Push to remote repository
git push

echo Done.