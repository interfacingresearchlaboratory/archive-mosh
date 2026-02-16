# Archive Mosh

Archive Mosh is a small Python tool that creates a randomized video collage ("mosh") by sampling short clips from a folder of source videos and stitching them into one final export.

## What It Does

- Scans a local `videos/` directory for `.mp4` files
- Randomly selects source files and in/out points
- Extracts short subclips (roughly 1-3 seconds)
- Concatenates clips until reaching a target duration
- Exports a final `.mp4` to `output/mosh.mp4`

## Requirements

- Python 3.9+ (recommended)
- `ffmpeg` installed and available in `PATH`
- Python dependencies from `requirements.txt`

## Installation

```bash
git clone https://github.com/interfacingresearchlaboratory/archive-mosh.git
cd archive-mosh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Install `ffmpeg` if needed:

- macOS (Homebrew): `brew install ffmpeg`
- Ubuntu/Debian: `sudo apt install ffmpeg`

## Usage

1. Create the expected folders:

```bash
mkdir -p videos output
```

2. Add your source `.mp4` files to `videos/`.
3. Run:

```bash
python file_output.py
```

4. Find the generated file at:

```text
output/mosh.mp4
```

## Configuration

Current runtime parameters are set in `file_output.py`:

- `duration_minutes`: total output duration target
- Input directory: `videos/`
- Output file: `output/mosh.mp4`

If you want custom values right now, edit these constants near the bottom of the script.

## Project Structure

```text
archive-mosh/
├── file_output.py
├── requirements.txt
├── videos/          # user-provided input files
└── output/          # generated output
```

## Known Limitations

- Only `.mp4` files are detected by default
- No CLI arguments yet (configuration is in-code)
- Limited validation for edge cases (very short videos, missing folders, empty input)

## Future Improvements

Ideas that would make this more production-ready and contributor-friendly:

1. Add a command-line interface (`argparse` or `typer`) for input path, output path, clip length, and duration.
2. Add robust input validation and clear error handling for empty directories, unreadable files, and short clips.
3. Support more formats (`.mov`, `.mkv`, `.webm`) and optional recursive file discovery.
4. Add deterministic mode with random seed control for reproducible outputs.
5. Add transition/effects options (crossfades, speed ramps, color transforms, datamosh-style effects).
6. Improve performance by reducing repeated file open operations and supporting parallel preprocessing.
7. Provide automated tests (unit tests + a small integration test fixture).
8. Add GitHub Actions CI for linting, tests, and dependency checks.
9. Add packaging (`pyproject.toml`) and publish as an installable CLI tool.
10. Add docs/examples with sample input sets and output previews.

## Contributing

Contributions are welcome. If you open a PR, include:

- A clear description of the change
- Steps to test it
- Any relevant before/after behavior notes

For larger changes, open an issue first to align on direction.

## License

No license file is currently present in this repository.  
Before accepting outside contributions, add a license (for example MIT, Apache-2.0, or GPL-3.0) to make usage terms explicit.
