"""Install the user's existing Vazirmatn.zip locally. Does not download anything."""
from pathlib import Path
from zipfile import ZipFile

root = Path(__file__).resolve().parent
zip_path = root / 'Vazirmatn.zip'
font_destination = root / 'assets' / 'fonts' / 'Vazirmatn-VariableFont_wght.ttf'
if not zip_path.is_file():
    raise SystemExit('Put Vazirmatn.zip next to this script, then run it again.')
font_destination.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(zip_path) as archive:
    font_destination.write_bytes(archive.read('Vazirmatn-VariableFont_wght.ttf'))
print('Vazirmatn was installed. You can now open index.html offline.')
