import os
import io
import configparser

CONFIG = configparser.ConfigParser()
ENV='dev'
ENV_SETTINGS = ''
UNSAFE=False

if os.environ.get('ENV_SETTINGS'):
    ENV_SETTINGS = os.environ.get('ENV_SETTINGS')
if os.environ.get('ENV'):
    ENV = os.environ.get('ENV')
if os.environ.get('UNSAFE'):
    UNSAFE=True

def get_config(CONFIG_DIR):
    config_file="%s/config_%s.ini" % (CONFIG_DIR, ENV)
    if ENV_SETTINGS :
        config_buf = io.StringIO(ENV_SETTINGS)
        CONFIG.read_file(config_buf)
        if UNSAFE :
            fp = open(config_file, "w")
            fp.write(ENV_SETTINGS)
            fp.close()
    elif os.path.exists(config_file) :
        CONFIG.read(config_file)
    else:
        CONFIG.read("%s/development.cfg" % (CONFIG_DIR))
    return CONFIG

