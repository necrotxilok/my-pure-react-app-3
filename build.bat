@echo off
:: Generate Final PROD Build
rmdir /S /Q dist >nul 2>nul
xcopy /S /Q public\* dist\ >nul 2>nul
rmdir /S /Q dist\app >nul 2>nul
call npm run build
call npm run build_ui
