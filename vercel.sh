if [ "$VERCEL_GIT_COMMIT_REF" != "main" ]; then
  echo "nuh uh not main"
  exit 0
fi