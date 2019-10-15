CSS_C=sass
CSS_FLAGS=
CSS_SRC=/css
CSS_OUT=build/css
CSS_TARGETS=$(patsubst $(CSS_SRC)/%.scss,%.css,$(wildcard $(CSS_SRC)/*.scss))

all: css

final: CSS_FLAGS = -t compact --sourcemap=none
final: all

css: $(CSS_TARGETS)

.SECONDEXPANSION:
%.css: $(CSS_SRC)/$$*.scss
	$(CSS_C) $(CSS_FLAGS) $? $(CSS_OUT)/$@

# clean:
# 	rm -f $(CSS_OUT)/*