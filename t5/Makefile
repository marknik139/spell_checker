VENV = env

.PHONY: env
env:
	python3 -m venv $(VENV)

.PHONY: install
install: env
	$(VENV)/bin/pip install -r requirements.txt

.PHONY: run
run:
	$(VENV)/bin/uvicorn app:app --host 0.0.0.0 --port 8000 --reload

.PHONY: freeze
freeze:
	$(VENV)/bin/pip freeze > requirements.txt

.PHONY: clean
clean:
	rm -rf $(VENV)
